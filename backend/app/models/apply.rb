class Apply < ApplicationRecord
    belongs_to :applicant, class_name: "User", foreign_key: "applicant_id"
    belongs_to :applied_group, class_name: "Group", foreign_key: "group_id"

    validates :times, numericality: { less_than_or_equal_to: 3 }

    after_create :send_notification
    after_update :send_notification

    def send_notification
        Notification.create(user_id: self.applied_group.founder_id)
        # byebug
    end
end
