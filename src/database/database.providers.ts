import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

export const databaseProviders=[
    {
        provide:'DATABASE_CONNECTION',
        inject:[ConfigService],
        useFactory:(config:ConfigService)=>{
          const dataSource=new DataSource( {
            type:'postgres',
            host:config.get('Host'),
            port:+config.get('PORT_DB') || 5432,
            username: config.get('USERNAME') || 'postgres',
            password: config.get('PASSWORD') || '12345',
            database:config.get('DATABASE') ||'back_end_CamilaVivas',

            });
         
        return dataSource.initialize();

        }
    }

]