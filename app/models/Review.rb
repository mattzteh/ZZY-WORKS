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

    validates :rating, :title, :body, presence: true, length: {minimum: 1}
    validates :rating, numericality: { in: 1..5 }
    validates :product_id, uniqueness: { scope: :user_id, message: 'You have reviewed this product!'}

#-------------------------------------------------------------------------------

    belongs_to :user
    belongs_to :product

end
