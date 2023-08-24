class HomeController < ApplicationController
  def index
    @pagy, @movies = pagy(Movie.order('random()'))
  end
end
