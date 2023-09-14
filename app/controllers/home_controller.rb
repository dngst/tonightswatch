class HomeController < ApplicationController
  def index
    ids = Rails.cache.fetch('movie_ids', expires_in: 12.hours) do
      Movie.pluck(:id)
    end
    @pagy, @movies = pagy(Movie.where(id: ids).order('created_at DESC'))
  end
end
