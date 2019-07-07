class AppliesController < ApplicationController

    def create 
        if login?
            # check if user has applied before
            @apply = Apply.find_by(group_id: params[:group_id], applicant_id: @current_user.id)
            # if applied before
            if @apply 
                #check times of the user has applied, if less than 3 times render success, otherwise fail.
                if @apply.update(times: @apply.times + 1)
                    @remain_times = 3 - @apply.times
                    render json: {apply: @apply, remain_times: @remain_times}, status: 200
                else
                    render json: {apply_error: 'exceed the maximum amount of applies'}
                end
            else
                # if not applied before, create new apply
                @apply = Apply.create(group_id: params[:group_id], applicant_id: @current_user.id)
                @remain_times = 3 - @apply.times
                render json: {apply: @apply, remain_times: @remain_times}
            end
        else
            render json: {error: "User is not logged in"}, status: :unauthorized
        end
    end
end
