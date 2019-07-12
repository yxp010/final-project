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

    def leave_group
        if login?
            @joined = GroupsUser.find_by(user_id: @current_user.id, group_id: params[:id])

            if @joined 
                if @joined.group.founder_id == @current_user.id 
                    render json: {error: "Cannot leave group that you created, you can delete the group in 'groups created by you' in menu on the left."}, status: 400
                else
                    @joined.destroy
                    render json: {status: 'successfully left'}, status: 200
                end
            else 
                render json: {no_group_error: 'No group found, this group might be deleted by the creater.'}, status: 400
            end
        else
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def show_events
        @user = User.find(params[:id])
        @events = @user.events
        render json: @events
    end

    def profile 
        if login?
            @groups_amount = @current_user.groups.count
            @past_events = @current_user.past_events.count
            render json: {username: @current_user.username, groups_amount: @groups_amount, past_events: @past_events}, status: 200
        else
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def past_events
        if login?
            @past_events = @current_user.past_events
            render json: {events: @past_events}
        else 
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def upcoming_events
        if login?
            @upcoming_events = @current_user.upcoming_events
            # byebug
            render json: {events: @upcoming_events}
        else 
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def user_notifications
        if login?
            @notifications = @current_user.notifications.reverse
            render json: {notifications: @notifications}
        else 
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def user_notifications_read
        if login?
            @notifications = @current_user.notifications.where(has_read: true).reverse
            render json: {notifications: @notifications}
        else 
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def user_notifications_unread
        if login?
            @notifications = @current_user.notifications.where(has_read: false).reverse
            render json: {notifications: @notifications, count: @notifications.count}
        else 
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def read_notification
        if login?
            @notification = Notification.find(params[:id])
            @notification.update(has_read: true)
            @notifications = @current_user.notifications.reverse
            render json: {notification: @notification, notifications: @notifications, status: 'successful'}, status: 200
        else 
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def unread_notification
        if login?
            @notification = Notification.find(params[:id])
            @notification.update(has_read: false)
            @notifications = @current_user.notifications.reverse
            render json: {notification: @notification, notifications: @notifications, status: 'successful'}, status: 200
        else 
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def delete_notification
        if login?
            Notification.find(params[:id]).destroy
            @notifications = @current_user.notifications.reverse
            @unread_notifications_count = @current_user.notifications.where(has_read: false).count
            render json: {status: 'successful', notifications: @notifications, unread_notifications_count: @unread_notifications_count}, status: 200
        else
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    private 

    def create_user 
        @user = User.create(username: params[:username], password: params[:password])
        @user
    end
end
