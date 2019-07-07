class TournamentsController < ApplicationController

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
        byebug
    end

end
