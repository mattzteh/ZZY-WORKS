class User < ApplicationRecord
    
    has_secure_password
    
    validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :first_name, :last_name, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true
    before_validation :ensure_session_token
    
    def self.find_by_credentials(credential, password)
        if credential =~ URI::MailTo::EMAIL_REGEXP 
            field = :email
            user = User.find_by(field => credential)
            user&.authenticate(password)
        else 
            nil
        end
    end

    def reset_session_token!
        self.update!(session_token: generate_unique_session_token)
        self.session_token
    end

    private

    def generate_unique_session_token
        loop do
            token = SecureRandom.base64
            break token unless User.exists?(session_token: token)
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
end