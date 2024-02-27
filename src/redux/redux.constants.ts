export interface IAuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  userDetails: IUserDetails | null;
}

export interface IUserDetails {
  userName: string;
  fullname: string;
  email?: string;
  phoneNumber?: string;
}

export const IUserDetailsInitialState: IUserDetails = {
  userName: '',
  fullname: '',
  email: '',
  phoneNumber: '',
};

export const IAuthStateInitialState: IAuthState = {
  isLoading: false,
  isAuthenticated: false,
  userDetails: IUserDetailsInitialState,
};

export interface IApplicationStates {
  homeScreenTab: number;
}

export const IApplicationStatesInitialStates: IApplicationStates = {
  homeScreenTab: 0,
};

export interface IAppoinment {
  appoinmentId: string;
  patientName: string;
  clinicAddress: string;
  appoinmentTime: string;
  appoinmentDate: string;
  paymentDetails?: IPaymentDetails | null;
  gender?: string;
  age?: string | number;
  problem?: string;
}

export const IAppoinmentInitialState: IAppoinment = {
  appoinmentId: '',
  patientName: '',
  clinicAddress: '',
  appoinmentDate: '',
  appoinmentTime: '',
  gender: '',
  age: '',
  problem: '',
  paymentDetails: null,
};

const IPaymentDetailsInitialState: IPaymentDetails = {
  paymentId: '',
  ammount: '',
  paymentType: 'cash',
};
export interface IPaymentDetails {
  paymentId: string;
  ammount: string;
  paymentType: 'creditcard' | 'debitcard' | 'cash' | 'upi';
}

export interface IDateSlots {
  id: string;
  value: string;
}

export const IDateSlotsInitialStates: IDateSlots = {
  id: '',
  value: '',
};

export interface ITimeslots {
  id: string;
  value: string;
}
export interface UserData {
  upcomingAppoinment: {data: IAppoinment | null; loading: boolean; error: any};
  appoinmentList: {data: IAppoinment[]; loading: boolean; error: any};
  dateSlots: {data: IDateSlots[]; loading: boolean; error: any};
  timeSlots: {data: ITimeslots[]; loading: boolean; error: any};
}

export const UserDataInitialState: UserData = {
  upcomingAppoinment: {
    data: null,
    loading: false,
    error: null,
  },
  appoinmentList: {data: [], loading: false, error: null},
  dateSlots: {data: [], loading: false, error: null},
  timeSlots: {data: [], loading: false, error: null},
};

export const appointments: IAppoinment[] = [
  {
    appoinmentId: '1',
    patientName: 'John Doe',
    clinicAddress: '123 Clinic St, City, Country',
    appoinmentTime: '10:00 AM',
    appoinmentDate: '2024-02-25',
    paymentDetails: {
      paymentId: 'p1',
      ammount: '50',
      paymentType: 'creditcard',
    },
    gender: 'Male',
    age: 30,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
  {
    appoinmentId: '2',
    patientName: 'Jane Smith',
    clinicAddress: '456 Clinic Ave, City, Country',
    appoinmentTime: '2:00 PM',
    appoinmentDate: '2024-02-26',
    paymentDetails: {
      paymentId: 'p2',
      ammount: '75',
      paymentType: 'debitcard',
    },
    gender: 'Female',
    age: 25,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
  {
    appoinmentId: '3',
    patientName: 'Michael Johnson',
    clinicAddress: '789 Medical Center Rd, Town, Country',
    appoinmentTime: '3:30 PM',
    appoinmentDate: '2024-02-27',
    paymentDetails: {
      paymentId: 'p3',
      ammount: '100',
      paymentType: 'cash',
    },
    gender: 'Male',
    age: 45,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
  {
    appoinmentId: '4',
    patientName: 'Emily Davis',
    clinicAddress: '101 Hospital Ave, Village, Country',
    appoinmentTime: '9:00 AM',
    appoinmentDate: '2024-02-28',
    paymentDetails: {
      paymentId: 'p4',
      ammount: '60',
      paymentType: 'creditcard',
    },
    gender: 'Female',
    age: 35,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
  {
    appoinmentId: '5',
    patientName: 'Christopher Martinez',
    clinicAddress: '222 Health Center Blvd, City, Country',
    appoinmentTime: '11:30 AM',
    appoinmentDate: '2024-02-29',
    paymentDetails: {
      paymentId: 'p5',
      ammount: '90',
      paymentType: 'debitcard',
    },
    gender: 'Male',
    age: 28,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
  {
    appoinmentId: '6',
    patientName: 'Emma Brown',
    clinicAddress: '333 Wellness St, Town, Country',
    appoinmentTime: '4:45 PM',
    appoinmentDate: '2024-03-01',
    paymentDetails: {
      paymentId: 'p6',
      ammount: '80',
      paymentType: 'cash',
    },
    gender: 'Female',
    age: 40,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
  {
    appoinmentId: '7',
    patientName: 'Daniel Wilson',
    clinicAddress: '444 Medical Rd, City, Country',
    appoinmentTime: '1:15 PM',
    appoinmentDate: '2024-03-02',
    paymentDetails: {
      paymentId: 'p7',
      ammount: '70',
      paymentType: 'creditcard',
    },
    gender: 'Male',
    age: 32,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
  {
    appoinmentId: '8',
    patientName: 'Olivia Taylor',
    clinicAddress: '555 Hospital Ave, Town, Country',
    appoinmentTime: '10:30 AM',
    appoinmentDate: '2024-03-03',
    paymentDetails: {
      paymentId: 'p8',
      ammount: '55',
      paymentType: 'debitcard',
    },
    gender: 'Female',
    age: 27,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
  {
    appoinmentId: '9',
    patientName: 'William Anderson',
    clinicAddress: '666 Health Center Rd, City, Country',
    appoinmentTime: '3:00 PM',
    appoinmentDate: '2024-03-04',
    paymentDetails: {
      paymentId: 'p9',
      ammount: '120',
      paymentType: 'cash',
    },
    gender: 'Male',
    age: 50,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
  {
    appoinmentId: '10',
    patientName: 'Sophia Thomas',
    clinicAddress: '777 Wellness Blvd, Village, Country',
    appoinmentTime: '11:00 AM',
    appoinmentDate: '2024-03-05',
    paymentDetails: {
      paymentId: 'p10',
      ammount: '95',
      paymentType: 'creditcard',
    },
    gender: 'Female',
    age: 38,
    problem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut quam vitae odio ullamcorper dapibus vel eget ligula. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
  },
];
