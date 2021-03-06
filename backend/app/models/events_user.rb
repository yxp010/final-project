class EventsUser < ApplicationRecord

    belongs_to :user
    belongs_to :event

    after_create_commit :send_create_notification
    after_destroy_commit :send_delete_notification

    def send_create_notification
        Notification.create(notification_type: 'message', user_id: self.user.id, message: "You sccussfully joined game (#{self.event.name}).") if self.event.founder_id != self.user.id
        Notification.create(notification_type: 'message', user_id: self.event.founder_id, message: "User '#{self.user.username}' has joined the game (#{self.event.name}).") if self.event.founder_id != self.user.id
    end

    def send_delete_notification
        Notification.create(notification_type: 'message', user_id: self.event.founder_id, message: "User '#{self.user.username}' has left the game (#{self.event.name}).")
    end
end
