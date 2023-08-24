class HomeController < ApplicationController
  def index
    @pagy, @movies = pagy(Movie.all)
  end
end
