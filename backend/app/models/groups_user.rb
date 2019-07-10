class GroupsUser < ApplicationRecord

    belongs_to :user
    belongs_to :group

    after_destroy_commit :send_delete_notification
    after_create_commit :send_accept_notification

    def send_accept_notification
        Notification.create(notification_type: 'message', user_id: self.user.id, message: "Your have been accepted by the group (#{self.group.name}).")
    end

    def send_delete_notification
        Notification.create(notification_type: 'message', user_id: self.group.founder_id, message: "User '#{self.user.username}' has left the group (#{self.group.name}).")
        @apply = Apply.find_by(applicant_id: self.user.id, group_id: self.group.id)
        if @apply
            @apply.destroy
        end
        # Reset apply time
    end
end
