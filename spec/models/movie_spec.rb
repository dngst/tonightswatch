# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Movie do
  it { is_expected.to validate_presence_of :title }
  it { is_expected.to validate_presence_of :poster_img_url }
  it { is_expected.to validate_presence_of :imdb_page }
end
