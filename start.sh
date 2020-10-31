# Instala as Gems
bundle check || bundle install

# Roda nosso servidor
foreman start -f Procfile.dev
