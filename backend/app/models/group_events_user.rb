class GroupEventsUser < ApplicationRecord

    belongs_to :user 
    belongs_to :group_event

    validate :in_group, :in_event, on: :create

    after_create :send_notification
    after_update :send_notification

    def send_notification
        Notification.create(user_id: self.group_event.group.founder_id)
        # byebug
    end

    def in_group
        in_group = self.group_event.group.users.find {|user| user.id == self.user.id}
        errors.add(:in_group, 'user is not in group') unless in_group
    end

    def in_event
        in_event = self.group_event.users.find {|user| user.id == self.user.id}
        errors.add(:in_event, 'user is in event') if in_event
    end
end
