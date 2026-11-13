# Synthetic IT Service Desk Runbook

**Dataset type:** Synthetic knowledge-base records\
**Version:** 1.0\
**Records:** 25\
**Purpose:** Demonstration and testing of an IT Support Agentic RAG
system

> **Important:** This is fictional sample content, not an approved
> organizational policy or operational procedure. Validate
> organization-specific details before production use. Do not invent
> internal URLs, contact numbers, SLAs, recovery timelines, or technical
> configurations.

## Dataset conventions

Each record is intended to be independently retrievable. Preserve its
ID, title, category, and keywords as metadata where possible. The agent
should state when the retrieved material does not contain an answer
rather than guessing.

------------------------------------------------------------------------

## RB-001 --- Email send/receive failure

**Category:** Email send/receive failure\
**Keywords:** email send/receive failure, service desk, troubleshooting,
incident

### Symptoms

User cannot send or receive email, or messages are delayed.

### Initial triage

First establish scope: one user, a team, or many users. Ask when it
started, which client is affected, whether webmail works, and whether an
error or non-delivery report appears.

### Safe troubleshooting / action

Check the service status dashboard and network connectivity. For one
user, sign out and back in, verify mailbox quota, and test the web
client. For a widespread incident, do not ask every user to reinstall
software; escalate the suspected service incident.

### Resolution validation

Send a permitted test message and confirm both send and receive
behavior. Record whether the issue is client-specific or service-wide.

### Escalation

Escalate multi-user failures as a suspected service incident. Route
quota, account, routing, or mail-flow errors to messaging support.

### Example user question

-   Email is not sending. What should I check first?

------------------------------------------------------------------------

## RB-002 --- Outlook desktop fails but webmail works

**Category:** Outlook desktop fails but webmail works\
**Keywords:** outlook desktop fails but webmail works, service desk,
troubleshooting, incident

### Symptoms

The desktop email client fails while the web client works.

### Initial triage

Confirm webmail works; identify whether other desktop apps have
connectivity; record the desktop error and when it began.

### Safe troubleshooting / action

Close and reopen the client; verify the correct account; check managed
updates; capture the exact error. Follow approved profile repair only
when authorized. Do not delete local data without checking
synchronization and retention.

### Resolution validation

Confirm desktop sign-in and recent-message synchronization. Check for
unsent messages.

### Escalation

Escalate if profile repair is required, local data may be at risk, or
the issue persists after approved checks.

### Example user question

-   Webmail works, but Outlook desktop does not.

------------------------------------------------------------------------

## RB-003 --- Mailbox quota exceeded

**Category:** Mailbox quota exceeded\
**Keywords:** mailbox quota exceeded, service desk, troubleshooting,
incident

### Symptoms

The user sees a mailbox-full warning or cannot send/receive due to
quota.

### Initial triage

Check quota using authorized tools and confirm whether the warning is
current. Determine whether retention rules apply.

### Safe troubleshooting / action

Explain approved cleanup options. Review large items and deleted items
according to retention policy. Do not delete business records to make
space. Request quota change through the approved process if needed.

### Resolution validation

Recheck quota and send/receive after cleanup or approved quota change.

### Escalation

Escalate if retention prevents cleanup or business-critical mail remains
blocked.

### Example user question

-   My mailbox is full. Can I delete old messages?

------------------------------------------------------------------------

## RB-004 --- Delayed email delivery

**Category:** Delayed email delivery\
**Keywords:** delayed email delivery, service desk, troubleshooting,
incident

### Symptoms

Messages arrive late or remain in an outbox or queue.

### Initial triage

Determine whether delay affects one sender, recipient, domain, or
multiple users. Record timestamps and any non-delivery report.

### Safe troubleshooting / action

Check service status and known incidents; test with an approved
recipient; use authorized message-tracking tools. Avoid repeatedly
resending messages that may later be delivered.

### Resolution validation

Confirm delivery using approved tracking or recipient confirmation.

### Escalation

Escalate multi-user delays or queue backlogs to messaging operations.
Report suspected malicious or misdirected mail to Security.

### Example user question

-   My emails are delayed. Is this a wider issue?

------------------------------------------------------------------------

## RB-005 --- Suspicious email attachment or link

**Category:** Suspicious email attachment or link\
**Keywords:** suspicious email attachment or link, service desk,
troubleshooting, incident

### Symptoms

A user receives an unexpected attachment or link, or may have opened it.

### Initial triage

Ask whether the link was clicked, attachment opened or executed,
credentials entered, or MFA approved.

### Safe troubleshooting / action

Do not forward the message. Use the approved phishing-reporting method.
If a file was executed or credentials entered, stop routine
troubleshooting and contact Security. Preserve evidence as directed.

### Resolution validation

Follow Security containment and recovery instructions; document what
action the user took.

### Escalation

Immediate Security escalation for executed files, credential disclosure,
unexpected MFA approval, or suspected data exposure.

### Example user question

-   I opened an attachment that looks suspicious.

------------------------------------------------------------------------

## RB-006 --- Slow laptop initial triage

**Category:** Slow laptop initial triage\
**Keywords:** slow laptop initial triage, service desk, troubleshooting,
incident

### Symptoms

Laptop is slow, freezes, or takes a long time to open applications.

### Initial triage

Ask when it began, whether all apps are affected, whether updates
recently ran, and whether slowness occurs at startup or continuously.

### Safe troubleshooting / action

Check CPU, memory, free storage, startup applications, OS update status,
and endpoint security scan status. Close only unnecessary user apps. Do
not disable security agents or terminate unknown processes as a
shortcut.

### Resolution validation

After saving work, restart only when appropriate and recheck
performance. Record persistent resource usage.

### Escalation

Escalate if performance remains poor, hardware diagnostics fail, or
repeated shutdowns occur.

### Example user question

-   My laptop is very slow. What should I check?

------------------------------------------------------------------------

## RB-007 --- Low disk space

**Category:** Low disk space\
**Keywords:** low disk space, service desk, troubleshooting, incident

### Symptoms

Device reports low storage or applications fail due to insufficient free
space.

### Initial triage

Identify affected drive and available capacity using approved system
tools.

### Safe troubleshooting / action

Use organization-approved cleanup tools. Remove only approved temporary
files. Do not delete system folders, incident evidence, or business
records without authorization.

### Resolution validation

Confirm free space increased and affected apps work.

### Escalation

Escalate unexplained storage growth or space consumed by managed/system
data.

### Example user question

-   My laptop says disk space is low.

------------------------------------------------------------------------

## RB-008 --- High CPU or memory

**Category:** High CPU or memory\
**Keywords:** high cpu or memory, service desk, troubleshooting,
incident

### Symptoms

Monitoring shows sustained high CPU or memory usage.

### Initial triage

Record process name, usage, duration, and user activity at the time.

### Safe troubleshooting / action

Close unnecessary apps normally; check approved updates/scans; capture
process details. Do not disable endpoint security or terminate unknown
system processes without authorization.

### Resolution validation

Observe whether resource usage returns to normal and the device becomes
responsive.

### Escalation

Escalate sustained high usage, unknown processes, repeated crashes, or
suspected malware.

### Example user question

-   Task Manager shows high CPU. Should I end the process?

------------------------------------------------------------------------

## RB-009 --- Repeated laptop shutdowns

**Category:** Repeated laptop shutdowns\
**Keywords:** repeated laptop shutdowns, service desk, troubleshooting,
incident

### Symptoms

Laptop shuts down unexpectedly or restarts repeatedly.

### Initial triage

Ask whether it happens on battery, AC power, under load, or after
updates. Record error screens and times.

### Safe troubleshooting / action

Save work; check approved updates; note overheating or power symptoms
without opening the device; run only approved hardware diagnostics.

### Resolution validation

Confirm stability during normal use and record diagnostic results.

### Escalation

Escalate failed diagnostics, repeated shutdowns after software
remediation, or battery/thermal safety concerns.

### Example user question

-   My laptop keeps shutting down.

------------------------------------------------------------------------

## RB-010 --- Slow startup

**Category:** Slow startup\
**Keywords:** slow startup, service desk, troubleshooting, incident

### Symptoms

Laptop takes a long time to become usable after sign-in.

### Initial triage

Determine whether startup is slow for every user or only one profile and
whether a recent installation preceded it.

### Safe troubleshooting / action

Review startup apps with approved tools. Disable only nonessential user
apps where policy permits. Do not disable security, device management,
encryption, or monitoring agents.

### Resolution validation

Restart and compare startup behavior; document changes made.

### Escalation

Escalate if a managed startup component appears to fail.

### Example user question

-   Can I disable startup apps to speed up my laptop?

------------------------------------------------------------------------

## RB-011 --- P1 critical priority

**Category:** P1 critical priority\
**Keywords:** p1 critical priority, service desk, troubleshooting,
incident

### Symptoms

P1 applies to a company-wide outage or critical security incident under
the supplied priority definitions.

### Initial triage

Confirm scope and impact. Determine whether a critical service is
unavailable company-wide or Security has identified a critical incident.

### Safe troubleshooting / action

Create/update the incident using the major-incident process. Record
affected services, locations, user groups, start time, workaround, and
evidence. Notify the incident lead.

### Resolution validation

Keep updates in the incident record and follow incident-lead
communications.

### Escalation

Immediate escalation to incident management and/or Security. Do not wait
for ordinary ticket handling.

### Example user question

-   When should an issue be P1?

------------------------------------------------------------------------

## RB-012 --- P2 major team blocked

**Category:** P2 major team blocked\
**Keywords:** p2 major team blocked, service desk, troubleshooting,
incident

### Symptoms

P2 applies when a major team is blocked and no workaround is available.

### Initial triage

Identify team, service, number of users, business process, and whether
any safe workaround exists.

### Safe troubleshooting / action

Record impact; check related incidents; notify service owner; do not
assign P2 solely because a user requests urgency.

### Resolution validation

Confirm whether a workaround becomes available or work resumes.

### Escalation

Escalate to service owner or incident manager according to priority
process.

### Example user question

-   A whole team is blocked with no workaround. Is this P2?

------------------------------------------------------------------------

## RB-013 --- P3 individual user blocked/degraded

**Category:** P3 individual user blocked/degraded\
**Keywords:** p3 individual user blocked/degraded, service desk,
troubleshooting, incident

### Symptoms

P3 applies to an individual user blocked or experiencing degraded
service with a limited workaround.

### Initial triage

Determine individual business impact, affected app, and whether a
temporary workaround exists.

### Safe troubleshooting / action

Record device, app, error, start time, and troubleshooting. Follow the
relevant runbook.

### Resolution validation

Confirm whether the workaround permits the user to complete the task or
service is restored.

### Escalation

Escalate if scope expands, workaround fails, or impact increases.

### Example user question

-   One employee is blocked but has a workaround. Is this P3?

------------------------------------------------------------------------

## RB-014 --- P4 standard request

**Category:** P4 standard request\
**Keywords:** p4 standard request, service desk, troubleshooting,
incident

### Symptoms

P4 applies to standard requests, information requests, or low-impact
issues.

### Initial triage

Confirm that the item is routine and not a broader outage or security
incident.

### Safe troubleshooting / action

Classify as service request or low-priority incident according to the
ticketing system. Capture requested outcome and required approvals.

### Resolution validation

Confirm the information or standard service has been provided.

### Escalation

Reassess if impact or scope changes; route approval-dependent requests
to the owner.

### Example user question

-   What should be P4?

------------------------------------------------------------------------

## RB-015 --- Priority reassessment

**Category:** Priority reassessment\
**Keywords:** priority reassessment, service desk, troubleshooting,
incident

### Symptoms

Priority may change when scope, impact, urgency, or workaround changes.

### Initial triage

Ask whether more users are affected, a workaround stopped working, or
the business impact increased.

### Safe troubleshooting / action

Update the ticket with the reason for the change. Link related incidents
where possible. Do not downgrade a security incident without
Security/incident-management direction.

### Resolution validation

Ensure new priority and escalation route are visible.

### Escalation

Escalate material changes to the incident manager or service owner.

### Example user question

-   Several P3 reports now affect a department. Should priority change?

------------------------------------------------------------------------

## RB-016 --- Widespread service incident

**Category:** Widespread service incident\
**Keywords:** widespread service incident, service desk,
troubleshooting, incident

### Symptoms

Multiple users report the same service failure, suggesting a possible
broad incident.

### Initial triage

Compare affected users, locations, networks, and start times. Check the
status dashboard and known-incident channel.

### Safe troubleshooting / action

Link reports to an existing incident or create one through incident
process. Do not ask every user to reinstall software or repeat identical
local checks.

### Resolution validation

Validate recovery with an affected representative and authoritative
status information.

### Escalation

Escalate broad or critical outages to incident management.

### Example user question

-   Many users cannot access email. Should we troubleshoot each laptop?

------------------------------------------------------------------------

## RB-017 --- Status dashboard unavailable

**Category:** Status dashboard unavailable\
**Keywords:** status dashboard unavailable, service desk,
troubleshooting, incident

### Symptoms

The status dashboard cannot be reached, so service health cannot be
confirmed.

### Initial triage

Determine whether dashboard failure affects one user or multiple support
staff.

### Safe troubleshooting / action

Use approved alternate incident communications or provider status
sources if authorized. Continue collecting symptoms without assuming
service health.

### Resolution validation

Record that status could not be verified and update when authoritative
information is available.

### Escalation

Escalate if a critical service is affected or incident response is
delayed.

### Example user question

-   The status dashboard is down too. What now?

------------------------------------------------------------------------

## RB-018 --- User cannot sign in

**Category:** User cannot sign in\
**Keywords:** user cannot sign in, service desk, troubleshooting,
incident

### Symptoms

A user cannot sign in to a company application or device.

### Initial triage

Confirm username format, app, time, exact error, other working services,
recent password changes, and MFA-device changes.

### Safe troubleshooting / action

Check service status and account state using authorized tools. Direct
user to official self-service recovery where appropriate. Never ask for
password or MFA code.

### Resolution validation

Confirm sign-in after approved recovery or account correction.

### Escalation

Escalate lockouts, repeated failures, unknown MFA prompts, or suspected
compromise to identity support/Security.

### Example user question

-   A user cannot sign in. What information should I collect?

------------------------------------------------------------------------

## RB-019 --- Access denied in one app

**Category:** Access denied in one app\
**Keywords:** access denied in one app, service desk, troubleshooting,
incident

### Symptoms

User can authenticate but receives access denied in one application.

### Initial triage

Determine whether one app, one role, or multiple users are affected.
Record resource and exact denial message.

### Safe troubleshooting / action

Check required role and approved access request. Do not grant
permissions based only on verbal request.

### Resolution validation

Retest after authorized access change and confirm expected role.

### Escalation

Escalate to application owner/access management if permission is missing
or inconsistent.

### Example user question

-   I can sign in but one app says access denied.

------------------------------------------------------------------------

## RB-020 --- New software request

**Category:** New software request\
**Keywords:** new software request, service desk, troubleshooting,
incident

### Symptoms

User requests an application not listed in the Software Portal.

### Initial triage

Collect app name, publisher, version, business purpose, requested users,
data handled, and business owner.

### Safe troubleshooting / action

Obtain manager approval and submit for IT security review. Do not
install or grant admin rights before approval.

### Resolution validation

Confirm request status and communicate approved installation route.

### Escalation

Escalate licensing, data-handling, or security review questions to the
relevant owner.

### Example user question

-   How should I process software not in the portal?

------------------------------------------------------------------------

## RB-021 --- Lost/stolen laptop intake

**Category:** Lost/stolen laptop intake\
**Keywords:** lost/stolen laptop intake, service desk, troubleshooting,
incident

### Symptoms

User reports a missing or stolen company laptop.

### Initial triage

Treat as security-sensitive. Collect contact details, asset tag if
available, last known location, last-seen time, known device state, and
whether theft is suspected.

### Safe troubleshooting / action

Notify manager and Security through approved process. Do not ask user to
track or retrieve device. Record facts separately from estimates.

### Resolution validation

Confirm incident routing and provide the user with the follow-up
channel.

### Escalation

Immediate escalation; do not wait for asset tag or user to find device.

### Example user question

-   What should the Service Desk do when a laptop is stolen?

------------------------------------------------------------------------

## RB-022 --- Lost laptop containment

**Category:** Lost laptop containment\
**Keywords:** lost laptop containment, service desk, troubleshooting,
incident

### Symptoms

IT must assess whether a missing managed device can be locked, disabled,
or wiped under approved procedures.

### Initial triage

Verify device identity and management status using authorized systems.
Check whether device is online and confirm required approvals/evidence
handling.

### Safe troubleshooting / action

Only authorized IT staff initiate lock/wipe. Coordinate with Security.
Record actions and timestamps. Do not promise success if device is
offline.

### Resolution validation

Confirm command status in approved management tooling and document
pending actions.

### Escalation

Escalate to Security and endpoint management. User must not perform
independent remote recovery.

### Example user question

-   Can the Service Desk remotely wipe a missing laptop?

------------------------------------------------------------------------

## RB-023 --- Hardware diagnostic failure

**Category:** Hardware diagnostic failure\
**Keywords:** hardware diagnostic failure, service desk,
troubleshooting, incident

### Symptoms

Device reports hardware errors or fails approved diagnostics.

### Initial triage

Record diagnostic code, asset tag, symptoms, reproducibility, and safety
concerns.

### Safe troubleshooting / action

Run approved diagnostics only. Do not open device or replace components
unless authorized. Preserve user data under backup/repair policy.

### Resolution validation

Document test result and whether device passes or fails.

### Escalation

Escalate failed diagnostics, battery swelling, overheating, physical
damage, or repeated shutdowns.

### Example user question

-   The hardware diagnostic failed. What happens next?

------------------------------------------------------------------------

## RB-024 --- Ticket quality checklist

**Category:** Ticket quality checklist\
**Keywords:** ticket quality checklist, service desk, troubleshooting,
incident

### Symptoms

Ticket lacks information needed for another technician to understand the
issue.

### Initial triage

Capture title, affected user/team, service, device, start time,
frequency, exact error, impact, scope, actions attempted, and safe
evidence.

### Safe troubleshooting / action

Avoid passwords, MFA codes, private keys, tokens, and unnecessary
personal/customer data. Link duplicate reports to a parent incident
where possible.

### Resolution validation

Confirm ticket contains enough context for the next support group.

### Escalation

Do not delay immediate security escalation while collecting routine
details.

### Example user question

-   What information should every support ticket contain?

------------------------------------------------------------------------

## RB-025 --- Stop unsafe troubleshooting

**Category:** Stop unsafe troubleshooting\
**Keywords:** stop unsafe troubleshooting, service desk,
troubleshooting, incident

### Symptoms

A proposed step would bypass authentication, disable endpoint
protection, use another person's credentials, install unapproved
software, change protected settings, or delete evidence.

### Initial triage

Record symptom and last safe action. Identify whether a security
incident may be involved.

### Safe troubleshooting / action

Stop the unsafe action; do not repeat destructive steps; contact Service
Desk, service owner, or Security through approved channels.

### Resolution validation

Confirm the user understands not to continue unsafe actions and record
the escalation.

### Escalation

Immediate Security escalation for suspected compromise, credential
exposure, lost devices, malware execution, or unauthorized access.

### Example user question

-   When should a technician stop troubleshooting?

------------------------------------------------------------------------

## Dataset usage notes

-   P1: company-wide outage or critical security incident.
-   P2: major team blocked with no workaround.
-   P3: individual user blocked or degraded with limited workaround.
-   P4: standard request, information request, or low-impact issue.
-   These priority definitions follow the supplied sample. No
    response-time SLA is specified.
-   Validate procedures against the actual organization's
    service-management and security policies before production use.
