class Tournament < ApplicationRecord

    has_and_belongs_to_many :users
    belongs_to :type

end
