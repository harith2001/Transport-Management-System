"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('ticketing');
    const port = process.env.PORT || 3000;
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Ticketing')
        .setDescription('The Ticketing API description')
        .setVersion('1.0')
        .addTag('ticketing')
        .build();
    swagger_1.SwaggerModule.setup('ticketing/swagger', app, swagger_1.SwaggerModule.createDocument(app, config));
    await app.listen(3000);
    common_1.Logger.log(`Server running on http://localhost:${port}/ticketing/swagger`, 'Bootstrap APIs');
}
bootstrap();
//# sourceMappingURL=main.js.map