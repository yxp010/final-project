class EventsController < ApplicationController

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

        render json: @users
    end

    def join
        if login?
            @join = EventsUser.find_by(user_id: @current_user.id, event_id: params[:id])
            if @join 
                render json: {error: 'You have joined this event', data: @join}
            else
                @join = EventsUser.create(user_id: @current_user.id, event_id: params[:id])
                render json: {status: 'successful', data: @join}
            end
        else
            render json: {error: 'not loggin'}, status: :unauthorized
        end
    end

    def cancel_join
        if login?
            @join = EventsUser.find_by(user_id: @current_user.id, event_id: params[:id])
            if @join
                @join.destroy
                render json: {status: 'Successfully destroyed'}, status: 200
            else
                render json: {error: 'You have not joined this event yet'}, status, 400
            end
        else 
            render json: {error: 'not loggin'}, status: :unauthorized
        end

    end
end
