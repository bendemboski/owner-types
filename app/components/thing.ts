import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import type Owner from '@ember/owner';

interface Signature {
  Args: {
    name: string;
  };
}

export class Thing extends Component<Signature> {
  get owner(): Owner {
    return getOwner(this);
  }

  get ownerWithCast(): Owner {
    return getOwner(this as Component);
  }
}
