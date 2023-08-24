class HomeController < ApplicationController
  def index
    @pagy, @movies = pagy(Movie.all.reverse_order)
  end
end
