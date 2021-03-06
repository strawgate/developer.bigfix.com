# type: smf instance

No documentation exists.

# fmri of &lt;smf instance&gt; : smf fmri

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of a service instance. The FMRI is used to identify a specific instance of a service for administrative use.

# name of &lt;smf instance&gt; : string

Returns the name of the smf instance object. This is the same as the end component of the FMRI (&#39;Fault Management Resource Identifier&#39;) of the instance.

# parent service of &lt;smf instance&gt; : smf service

Returns the smf service to which this instance belongs. Each service can have multiple instances which can share configuration with each other as well as maintain individual configuration and  characteristics.

# property group &lt;string&gt; of &lt;smf instance&gt; : smf property group

Returns the specified smf property group of a particular service instance. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

# property group of &lt;smf instance&gt; : smf property group

Iterates over property groups of a service instance. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

# snapshot &lt;string&gt; of &lt;smf instance&gt; : smf snapshot

Returns the specified smf snapshot of a service instance. A snapshot is an unchanging picture of the full set of  property  groups  associated  with  an  instance. Snapshots are automatically created and managed by the Service Management Facility. A snapshot consists of a set of snaplevels, each of which holds copies of the property groups associated with an instance or service in the resolution path of the base instance. Typically, there is one snaplevel for the instance and one for the instance&#39;s parent service.

# snapshot of &lt;smf instance&gt; : smf snapshot

Iterates over the snapshots of a service instance. A snapshot is an unchanging picture of the full set of  property  groups  associated  with  an  instance. Snapshots are automatically created and managed by the Service Management Facility. A snapshot consists of a set of snaplevels, each of which holds copies of the property groups associated with an instance or service in the resolution path of the base instance. Typically, there is one snaplevel for the instance and one for the instance&#39;s parent service.

# &lt;smf instance&gt; as string : string

Returns a string representation of the smf instance object. This is the same as the end component of the FMRI (&#39;Fault Management Resource Identifier&#39;) of the instance, and the same as the name of the instance.
