# frozen_string_literal: true

class Movie < ApplicationRecord
  validates :title, :poster_img_url, :imdb_page, presence: true
end
