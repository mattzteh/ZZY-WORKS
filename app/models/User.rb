class User < ApplicationRecord

    before_validation :ensure_session_token

    validates :first_name, :last_name, presence: true
    validates :email, uniqueness: true, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email:)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt_obj = BCrypt::Password.new(self.password_digest)
        bcrypt_obj.is_password?(password)
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def generate_session_token
        token = SecureRandom::urlsafe_base64
        while User.exists?(session_token: token)
            token = SecureRandom::urlsafe_base64
        end
        token
    end

end