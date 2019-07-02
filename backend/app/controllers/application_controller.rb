class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token

    before_action :authorize_request
    skip_before_action :authorize_request, only: [:check_login, :near_events]
    include ::ActionController::Cookies

    def not_found
        render json: { error: 'not_found' }
      end
    
    def authorize_request

        header = cookies.signed[:jwt]
        begin
            @decoded = JsonWebToken.decode(header)
            # byebug
            if @decoded != "FAILED"
                @current_user = User.find(@decoded[:user_id])
            end
        rescue ActiveRecord::RecordNotFound => e
            # byebug
            render json: { error: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
            # byebug
            render json: { error: e.message }, status: :unauthorized
        end
    end

    def login?
        !!@current_user
    end

    def check_login
        header = cookies.signed[:jwt]
        @decoded = JsonWebToken.decode(header)

        if @decoded != 'FAILED' 
            @current_user = User.find(@decoded[:user_id])
        end

        if !!@current_user 
            render json: @current_user
        else
            render json: { error: 'not logged in' }, status: :unauthorized
        end
    end

    def logout
        cookies.delete :jwt
    end

    def near_events

        @groups = Group.all.select {|group| (group.lat - params[:lat]).abs < 0.5 && (group.lng - params[:lng]).abs < 0.5 }

        render json: {groups: @groups, tournament: @tournament, games: @games}, status: :ok
    end

    
end
