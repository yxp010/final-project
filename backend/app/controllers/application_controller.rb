class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token

    before_action :authorize_request
    skip_before_action :authorize_request, only: [:check_login, :near_events, :types, :near_events_on_discover, :fetch_events_on_discover]
    include ::ActionController::Cookies

    def not_found
        render json: { error: 'not_found' }
      end
    
    def authorize_request

        header = cookies.signed[:jwt]
        begin
            @decoded = JsonWebToken.decode(header)
            # 
            if @decoded != "FAILED"
                @current_user = User.find(@decoded[:user_id])
            end
        rescue ActiveRecord::RecordNotFound => e
            # 
            render json: { error: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
            # 
            render json: { error: e.message }, status: :unauthorized
        end
    end

    # based on login give different user experience
    def login_check
        header = cookies.signed[:jwt]
        @decoded = JsonWebToken.decode(header)

        if @decoded == 'FAILED' 
            return false
        else
            return true
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
        header = cookies.signed[:jwt]
        @decoded = JsonWebToken.decode(header)
        if @decoded != 'FAILED' 
            @current_user = User.find(@decoded[:user_id])
            self.findGamesGroups(@current_user.city, @current_user.state)
        else
            self.findGamesGroups('Houston', 'TX')
        end
    end

    def findGamesGroups(city, state)
        @groups = self.find_near('Group', params[:events_count], city, state) if !!params[:group] 
        @games = self.find_near('Event', params[:events_count], city, state) if !!params[:event]
        @types = Type.all.map {|t| t.name}
        if @groups && @games
            render json: {groups: @groups, games: @games, types: @types}, status: :ok
        else
            render json: {groups: @groups, types: @types} if @groups
            render json: {games: @games, types: @types} if @games
        end
    end

    def near_events_on_discover
        header = cookies.signed[:jwt]
        @decoded = JsonWebToken.decode(header)
        if @decoded != 'FAILED' 
            @current_user = User.find(@decoded[:user_id])
            self.discoverGamesGroups(@current_user.city, @current_user.state)
        else
            # byebug
            self.discoverGamesGroups('Houston', 'TX')
        end
    end

    def fetch_events_on_discover
        self.discoverGamesGroups(params[:city], params[:state])
    end

    def discoverGamesGroups(city, state)
        @types = Type.all.map {|t| t.name}
        if params[:type] == 'groups'
            @groups = self.find_near('Group', params[:events_count], city, state)
            render json: {groups: @groups, types: @types, city: city, state: state, type: 'groups'}
        else
            @games = self.find_near('Event', params[:events_count], city, state)
            render json: {games: @games, types: @types, city: city, state: state, type: 'games'}
        end
    end

    # def near_events_home

    # end
    
    def find_near(classname, count, city, state) 
        arr = []
        searchTerm = ''
        searchTerm = params[:searchTerm] if !!params[:searchTerm]
        if classname == 'Group'
            # byebug
            if params[:eventType] == 'All types' || !params[:eventType]
                arr = Group.all.where(city: city, state: state).select {|group| group.name.upcase.include?(searchTerm.upcase)}
            else
                arr = Group.all.where(city: city, state: state, type_name: params[:eventType]).select {|group| group.name.upcase.include?(searchTerm.upcase)}
            end
            arr = arr[0, count]
        else
            if params[:eventType] == 'All types' || !params[:eventType]
                arr = Event.all.where(city: city, state: state).select {|event| event.date > Time.zone.now.to_datetime && event.name.upcase.include?(searchTerm.upcase)}
            else
                arr = Event.all.where(city: city, state: state, type_name: params[:eventType]).select {|event| event.date > Time.zone.now.to_datetime && event.name.upcase.include?(searchTerm.upcase)}
            end
            # byebug
            arr = arr.sort_by(&:date)[0, count]
        end
        arr
    end

    def types

        @types = Type.all
        render json: {types: @types}

    end
end
