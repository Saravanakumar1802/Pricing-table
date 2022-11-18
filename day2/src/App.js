import './App.css';
import Card from './Card'






function App() {
  let Plans = [{
    plan: 'Free',
    price: 0,
    user: 'Single User',
    userEnabler: true,
    storage: '5GB Storage',
    storageEnabler: true,
    publicprojects: 'Unlimited Public Projects',
    publicprojectsEnabler: true,
    communityAccess: 'Community Access',
    communityAccessEnabler: true,
    privateProject: 'Unlimited Private Projects',
    privateProjectEnabler: false,
    phoneSupport: 'Dedicated Phone Support',
    phoneSupportEnabler: false,
    subDomain: 'Free Subdomain',
    subDomainEnabler: false,
    reports: 'Monthly Status Reports',
    reportsEnabler: false
  },
  {
    plan: 'Plus',
    price: '9$',
    user: '5 User',
    userEnabler: true,
    storage: '50GB Storage',
    storageEnabler: true,
    publicprojects: 'Unlimited Public Projects',
    publicprojectsEnabler: true,
    communityAccess: 'Community Access',
    communityAccessEnabler: true,
    privateProject: 'Unlimited Private Projects',
    privateProjectEnabler: true,
    phoneSupport: 'Dedicated Phone Support',
    phoneSupportEnabler: true,
    subDomain: 'Free Subdomain',
    subDomainEnabler: true,
    reports: 'Monthly Status Reports',
    reportsEnabler: false
  },

  {
    plan: 'Pro',
    price: '49$',
    user: 'Unlimited User',
    userEnabler: true,
    storage: '150GB Storage',
    storageEnabler: true,
    publicprojects: 'Unlimited Public Projects',
    publicprojectsEnabler: true,
    communityAccess: 'Community Access',
    communityAccessEnabler: true,
    privateProject: 'Unlimited Private Projects',
    privateProjectEnabler: true,
    phoneSupport: 'Dedicated Phone Support',
    phoneSupportEnabler: true,
    subDomain: 'Unlimited Free Subdomain',
    subDomainEnabler: true,
    reports: 'Monthly Status Reports',
    reportsEnabler: true
  }
  ]
  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            <Card data={Plans[0]} />
            <Card data={Plans[1]} />
            <Card data={Plans[2]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
