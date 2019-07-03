class User < ApplicationRecord
    has_and_belongs_to_many :groups
    has_and_belongs_to_many :events
    has_and_belongs_to_many :tournaments

    has_secure_password
end
