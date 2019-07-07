class Group < ApplicationRecord
    has_and_belongs_to_many :users
    belongs_to :type

    has_many :group_events

    has_many :applies
    has_many :applicants, through: :applies

    validates :name, presence: true

    def upcoming_events
        events = self.group_events.select do |e|
            e.date > Time.zone.now.to_datetime
        end
        events
    end
end
