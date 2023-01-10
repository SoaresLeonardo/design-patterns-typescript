import { SystemUserProxy } from './sytem-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Leonardo', 'leohenrique');
  console.log('Isso vai levar 2 segundos');
  console.log(await user.getAddresses());
}

clientCode();
