class AuthenticationController < ApplicationController

    skip_before_action :authorize_request, only: [:login]
    # before_action :check_login

    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            token = JsonWebToken.encode(user_id: @user.id)
            # time = Time.now + 24.hours.to_i
            cookies.signed[:jwt] = {value: token, httponly: true}
            render json: { status: 'success', user_id: @user.id}, status: :ok
        else
            render json: { error: 'Password or username is incorrect' }, status: :unauthorized
        end
    end

    
    

    private

    # def login_params
    #     params.permit(:email, :password)
    # end
end
