class GroupsController < ApplicationController


    def index 
        @groups = Group.all
        render json: @groups
    end

    def show
        @group = Group.find(params[:id])
        render json: @group
    end

    def users
        @group = Group.find(params[:id])
        @users = @group.users

        render json: @users
    end
end
