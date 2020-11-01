FactoryBot.define do
  factory :channel do
    team
    user_one { create(:user) }
    user_two { create(:user) }
  end
end
