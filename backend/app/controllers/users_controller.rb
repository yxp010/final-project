class UsersController < ApplicationController

    skip_before_action :authorize_request, only: [:index, :create]

    def index
        ## Remember application controller has before action
        ## if @current_user ##
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        @user = create_user
        render json: @user
    end

    def show_groups
        ## Remember application controller has before action
        ## if @current_user ##

        ## @current_user from before_action :authorize_request
        @groups = @current_user.groups

        render json: @groups
    end

    def show_events
        @user = User.find(params[:id])
        @events = @user.events

        render json: @events
    end

    private 

    def create_user 
        @user = User.create(username: params[:username], password: params[:password])
        @user
    end
end
