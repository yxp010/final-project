class Apply < ApplicationRecord
    belongs_to :applicant, class_name: "User", foreign_key: "applicant_id"
    belongs_to :applied_group, class_name: "Group", foreign_key: "group_id"

    validates :times, numericality: { less_than_or_equal_to: 3 }

    after_create :send_notification
    after_update :send_notification

    def send_notification
        @applicant = self.applicant
        @group = self.applied_group
        Notification.create(applicant_id: @applicant.id, apply_group_id: @group.id, user_id: self.applied_group.founder_id, notification_type: 'check', message: "User '#{@applicant.username}' asks to join group '#{@group.name}'.")
    end
end
