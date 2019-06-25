class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def show_groups
        @user = User.find(params[:id])
        @groups = @user.groups

        render json: @groups
    end

    def show_events
        @user = User.find(params[:id])
        @events = @user.events

        render json: @events
    end
end
