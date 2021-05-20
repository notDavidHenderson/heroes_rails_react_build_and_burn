class HerosController < ApplicationController

  def index
    @heros = Hero.all
    render json: @heros, include: [:weapon, :powers]
  end

end
