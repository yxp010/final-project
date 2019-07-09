class GroupsUser < ApplicationRecord

    belongs_to :user
    belongs_to :group

    after_destroy_commit :send_delete_notification


    def send_delete_notification
        Notification.create(user_id: self.group.founder_id, message: "User '#{self.user.username}' has left the group (#{self.group.name}).")
    end
end
