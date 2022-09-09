# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rating     :integer          not null
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  title      :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :rating, :title, :body, presence: true
    validates :rating, numericality: { in: 1..5 }

    belongs_to :user
    belongs_to :product

end
