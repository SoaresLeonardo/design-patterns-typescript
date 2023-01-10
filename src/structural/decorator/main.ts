import { ProductCustomizationDecorator } from './product/product-customization-decorator';
// import { ProductDecorator } from './product/product-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { Tshirt } from './product/t-shirt';

const tShirt = new Tshirt();
const stampedTShirt = new ProductStampDecorator(tShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);
console.log(tShirt.getPrice());
console.log(stampedTShirt.getPrice());
console.log(stampedTShirt.getPrice(), customizedTShirt.getName());
