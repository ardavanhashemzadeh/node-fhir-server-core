const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class EligibilityResponse extends DomainResource {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'EligibilityResponse';
		Object.assign(this, opt);
	}

	// This is a EligibilityResponse resource
	static get __resourceType () {
		return 'EligibilityResponse';
	}

	// Type of this resource.
	get resourceType () {
		return this.__resourceType;
	}

	set resourceType (new_value) {
		this.__EligibilityResponse = new_value;
	}

	// The Response business identifier.
	get identifier () {
		return this.__identifier;
	}

	set identifier (new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Original request resource reference.
	get request () {
		return this.__request;
	}

	set request (new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// Transaction status: error, complete.
	get outcome () {
		return this.__outcome;
	}

	set outcome (new_value) {
		this.__outcome = new_value;
	}

	// A description of the status of the adjudication.
	get disposition () {
		return this.__disposition;
	}

	set disposition (new_value) {
		this.__disposition = new_value;
	}

	// The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
	get ruleset () {
		return this.__ruleset;
	}

	set ruleset (new_value) {
		const Coding = require('./Coding');
		this.__ruleset = new Coding(new_value);
	}

	// The style (standard) and version of the original material which was converted into this resource.
	get originalRuleset () {
		return this.__originalRuleset;
	}

	set originalRuleset (new_value) {
		const Coding = require('./Coding');
		this.__originalRuleset = new Coding(new_value);
	}

	// The date when the enclosed suite of services were performed or completed.
	get created () {
		return this.__created;
	}

	set created (new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this.__created = new_value;
	}

	// The Insurer who produced this adjudicated response.
	get organization () {
		return this.__organization;
	}

	set organization (new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// The practitioner who is responsible for the services rendered to the patient.
	get requestProvider () {
		return this.__requestProvider;
	}

	set requestProvider (new_value) {
		const Reference = require('./Reference');
		this.__requestProvider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get requestOrganization () {
		return this.__requestOrganization;
	}

	set requestOrganization (new_value) {
		const Reference = require('./Reference');
		this.__requestOrganization = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			request: this.__request && this.__request.toJSON(),
			outcome: this.__outcome,
			disposition: this.__disposition,
			ruleset: this.__ruleset && this.__ruleset.toJSON(),
			originalRuleset: this.__originalRuleset && this.__originalRuleset.toJSON(),
			created: this.__created,
			organization: this.__organization && this.__organization.toJSON(),
			requestProvider: this.__requestProvider && this.__requestProvider.toJSON(),
			requestOrganization: this.__requestOrganization && this.__requestOrganization.toJSON()
		});
	}
}

module.exports = EligibilityResponse;
