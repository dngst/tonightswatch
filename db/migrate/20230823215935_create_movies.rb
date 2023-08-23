class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :poster_img_url

      t.timestamps
    end
  end
end
