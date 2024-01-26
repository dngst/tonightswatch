# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    ids = Rails.cache.fetch('movie_ids') do
      Movie.pluck(:id)
    end
    @pagy, @movies = pagy(Movie.where(id: ids).order(created_at: :desc))
  end
end
