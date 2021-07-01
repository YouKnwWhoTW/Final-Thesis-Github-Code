
/**
 * Transaction processor function.
 * @param {org.ehr.basic.consult} ctx The sample transaction instance.
 * @transaction
 */
async function gettingChecked(ctx) {
  
  ctx.consult.status = 'CONSULTED';

  
  const appointRegistry = await getAssetRegistry('org.ehr.basic.Consult');
  await appointRegistry.update(ctx.consult);
  const patientRegistry = await getParticipantRegistry('org.ehr.basic.Patient');
  await patientRegistry.update(ctx.patient);
  const prescriptionRegistry = await getAssetRegistry('org.ehr.basic.MedPresc');
  await prescriptionRegistry.update(ctx.medicine);
}

/**
 * transaction processor function.
 * @param {org.ehr.basic.buyMed} bmtx The sample transaction instance.
 * @transaction
 */
async function gettingMedicine(bmtx) {

  const patientRegistry = await getParticipantRegistry('org.ehr.basic.Patient');
  await patientRegistry.update(bmtx.patient);
}


