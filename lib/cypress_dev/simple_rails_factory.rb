require 'active_support/core_ext/string'

module CypressDev
  module SimpleRailsFactory
    def self.create(type, params = {})
      type.camelize.constantize.create!(params)
    end

    def self.create_list(type, amount, params = {})
      amount.to_i.times do
        create(type,params)
      end
    end

    def self.build(type, params = {})
      type.camelize.constantize.build!(params)
    end

    def self.build_list(type, amount, params = {})
      amount.to_i.times do
        build(type,params)
      end
    end
  end
end
