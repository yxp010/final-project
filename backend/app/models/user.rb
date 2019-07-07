class User < ApplicationRecord
    has_and_belongs_to_many :groups
    has_and_belongs_to_many :events
    has_and_belongs_to_many :tournaments

    has_many :group_events_users
    has_many :group_events, through: :group_events_users

    ### FIX THIS
    has_many :notifications
    # has_many :senders, through: :notifications
    # has_many :receivers, through: :notifications

    has_many :applies
    has_many :applied_groups, through: :applies

    has_secure_password
end
