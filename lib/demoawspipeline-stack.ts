import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep} from 'aws-cdk-lib/pipelines'

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // AWS CI-CD pipeline
    const democicdpipeline = new CodePipeline(this, 'demopupeline', {
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('XiaoHuang0803/democicd0123', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      })
    }
    )
  }
}
