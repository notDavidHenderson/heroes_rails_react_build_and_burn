class Hero < ApplicationRecord
  belongs_to :weapon

  has_many :hero_powers
  has_many :powers, through: :hero_powers
end
