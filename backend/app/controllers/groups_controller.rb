class GroupsController < ApplicationController


    def index 
        @groups = Group.all
        render json: @groups
    end

    def user_groups
        if login?
            @groups = @current_user.groups
            render json: {groups: @groups}
        else
            render json: {error: 'not logged in'}, status: :unauthorized
        end
        
    end

    def show
        @group = Group.find(params[:id])
        @founder = User.find(@group.founder_id)
        if !!@group.users 
            @members = @group.users
        else
            @members = []
        end
        !!@group.upcoming_events ? @upcoming_events = @group.upcoming_events : @upcoming_events = []
        render json: {upcoming_events: @upcoming_events, group: @group, members: @members, founder: @founder}
    end

    def create
        # byebug
        if !login? 
            render json: {error: 'not logged in'}, status: :unauthorized
        else 
            @new_group_info = group_params
            @new_group_info[:founder_id] = @current_user.id
            @new_group_info[:type_id] = @new_group_info[:type_id].to_i
            @group = Group.new(@new_group_info)

            # byebug
            if @group.valid? 
                # byebug
                @group.save
                GroupsUser.create(user_id: @current_user.id, group_id: @group.id)
                render json: @group
            else
                # byebug
                @error = @group.errors.messages.keys[0].to_s + ' ' + @group.errors.messages.values[0][0].to_s
                render json: {error: @error}, status: 400
            end
        end
        
    end

    def accept_user 
        if login?
            @notification = Notification.find(params[:id])
            @group = Group.find(@notification.apply_group_id)
            @applicant = User.find(@notification.applicant_id)
            if !!@group
                if !!@applicant 
                    in_group = GroupsUser.find_by(user_id: @applicant.id, group_id: @group.id)
                    if in_group
                        Notification.where(user_id: @current_user.id, applicant_id: @applicant.id, apply_group_id: @group.id).update_all(has_read: true, has_check: true)
                        @notifications = @current_user.notifications.reverse
                        render json: {staus: 'This user is already in group', notifications: @notifications}, status: 400
                    else
                        Notification.where(user_id: @current_user.id, applicant_id: @applicant.id, apply_group_id: @group.id).update_all(has_read: true, has_check: true)
                        GroupsUser.create(user_id: @applicant.id, group_id: @group.id)
                        @notifications = @current_user.notifications.reverse
                        render json: {status: 'successful', notifications: @notifications}, status: 200
                    end
                else
                    render json: {no_user_error: 'This user cannot be found (account could have been deleted).'}, status: 400
                end
                
            else
                render json: {group_error: 'No groups found, might be deleted by founder'}, status: 404
            end
        else
            render json: {error: 'not logged in'}, status: :unauthorized
        end
    end

    def users
        @group = Group.find(params[:id])
        @users = @group.users

        render json: @users
    end

    private 

    def group_params 
        params.require(:group).permit(:name, :type_id, :location, :lat, :lng, :city, :state, :description)
    end
end
