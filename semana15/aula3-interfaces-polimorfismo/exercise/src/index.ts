import { ResidentialClient } from './residentialClient';
import { CommercialClient } from './CommercialClient'
import { IndustrialClient} from './IndustrialClient';
import { ClientManager } from './clientManager'


const lucas = new ResidentialClient('lucas',20,100,'lucas','458.555.878-58','0845540-00') 
const pedro = new ResidentialClient('pedro',10,200,'pedro','111.555.878-58','0845540-11') 



const market = new CommercialClient('mercado du',20,100,'mercado du','98.258.154.0001-05','58974125-05')
const nubank = new CommercialClient('nubank',20,100,'nubank','98.258.888.0001-05','58974125-06')



const vale = new IndustrialClient('vale',65,85,'vale','58','58955-25')
const gerdau = new IndustrialClient('gerdau',65,25,'gerdau','58','58955-25')



const sysAdmin = new ClientManager()


sysAdmin.addClient(lucas)
sysAdmin.addClient(pedro)
sysAdmin.addClient(market)
sysAdmin.addClient(nubank)

console.log("Total de clientes:", sysAdmin.getClientsQuantity())

sysAdmin.printClientBills()

sysAdmin.calculateAllIncome()

