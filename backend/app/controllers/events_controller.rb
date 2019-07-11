class EventsController < ApplicationController

    skip_before_action :authorize_request, only: [:explore_games]

    def index 
        @events = Group.all
        render json: @events
    end

    def show
        @event = Group.find(params[:id])
        render json: @event
    end

    def users
        @event = Group.find(params[:id])
        @users = @event.users

        render json: {users: @users}
    end

    def join
        if login?
            @event = Event.find(params[:id])

            if @event.founder_id == @current_user.id
                render json: {error: 'You are the founder of this event'}, status: 400
            else
                @join = EventsUser.find_by(user_id: @current_user.id, event_id: @event.id)
                if @join 
                    render json: {error: 'You have joined this event', data: @join}, status: 400
                else
                    @join = EventsUser.create(user_id: @current_user.id, event_id: @event.id)
                    render json: {status: 'successful', data: @join}, status: 200
                end
            end
            
        else
            render json: {error: 'not loggin'}, status: :unauthorized
        end
    end

    def cancel_join
        if login?
            @event = Event.find(params[:id])

            if @event.founder_id == @current_user.id
                render json: {error: 'You are the founder of this event'}, status: 400
            else
                @join = EventsUser.find_by(user_id: @current_user.id, event_id: @event.id)
                if @join
                    @join.destroy
                    render json: {status: 'Successfully destroyed'}, status: 200
                else
                    render json: {error: 'You have not joined this event yet'}, status: 400
                end
            end
            
        else 
            render json: {error: 'not loggin'}, status: :unauthorized
        end
    end

    def explore_games
        
    end
end
