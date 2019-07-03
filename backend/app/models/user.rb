class User < ApplicationRecord
    has_and_belongs_to_many :groups
    has_and_belongs_to_many :events
    has_and_belongs_to_many :tournaments

    has_many :notifications
    has_many :senders, through: :notifications
    has_many :receivers, through: :notifications


    has_secure_password
end
