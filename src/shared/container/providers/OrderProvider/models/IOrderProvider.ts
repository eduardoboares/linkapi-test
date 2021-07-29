export default interface IOrderProvider {
    generateOrder(orderXML: XMLDocument): Promise<any>;
}
